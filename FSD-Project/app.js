const categories = ['All', 'Nature', 'Architecture', 'Animals', 'Travel'];
let currentCategory = 'All';
let photos = [
  { id: 1, title: 'Mountain Peak', category: 'Nature', url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500' },
  { id: 2, title: 'City Skyscraper', category: 'Architecture', url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500' },
  { id: 3, title: 'Wild Tiger', category: 'Animals', url: 'https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?w=500' },
  { id: 4, title: 'Tropical Beach', category: 'Travel', url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500' },
  { id: 5, title: 'Forest Path', category: 'Nature', url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=500' },
  { id: 6, title: 'Modern Bridge', category: 'Architecture', url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500' },
  { id: 7, title: 'Snowy Owl', category: 'Animals', url: 'https://images.unsplash.com/photo-1548507292-886832246637?w=500' },
  { id: 8, title: 'Desert Dunes', category: 'Travel', url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=500' }
];

// Fetch additional photos from public Gallery API
async function fetchGalleryAPI() {
  try {
    const res = await fetch('https://picsum.photos/v2/list?limit=4');
    const data = await res.json();
    const apiPhotos = data.map((item, i) => ({
      id: `api-${item.id}`,
      title: item.author,
      category: categories[1 + (i % (categories.length - 1))],
      url: `https://picsum.photos/id/${item.id}/500/400`
    }));
    photos = [...photos, ...apiPhotos];
  } catch (err) {
    console.error('API fetch failed:', err);
  }
  render();
}

function filterCategory(cat) {
  currentCategory = cat;
  render();
}

function render() {
  // Render Category Filter Buttons
  document.getElementById('filters').innerHTML = categories.map(cat => `
    <button onclick="filterCategory('${cat}')" 
      class="px-4 py-2 rounded-full text-sm font-semibold transition ${
        currentCategory === cat 
          ? 'bg-blue-600 text-white shadow-md' 
          : 'bg-white text-gray-700 hover:bg-gray-200 border border-gray-300'
      }">
      ${cat}
    </button>
  `).join('');

  // Render Filtered Photo Cards
  const filtered = currentCategory === 'All' ? photos : photos.filter(p => p.category === currentCategory);
  document.getElementById('gallery').innerHTML = filtered.map(p => `
    <div class="bg-white rounded-xl shadow overflow-hidden group hover:shadow-lg transition">
      <img src="${p.url}" alt="${p.title}" class="w-full h-48 object-cover group-hover:scale-105 transition duration-300">
      <div class="p-3">
        <h3 class="font-semibold text-gray-800 text-sm truncate">${p.title}</h3>
        <span class="text-xs text-blue-600 font-medium">${p.category}</span>
      </div>
    </div>
  `).join('');
}

fetchGalleryAPI();
