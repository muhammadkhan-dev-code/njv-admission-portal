const groups = document.querySelectorAll('.card-group');
let current_group = 0;
document.getElementById('nextBtn').addEventListener('click', () => {
  const outgoing = groups[current_group];

  current_group = (current_group + 1) % groups.length;
  const incoming = groups[current_group];
  outgoing.classList.remove('opacity-100');
  outgoing.classList.add('animate-slide-left-out');

  incoming.classList.remove('hidden', 'opacity-0');
  incoming.classList.add('absolute', 'top-0', 'left-0', 'w-full', 'animate-slide-right-in');
  setTimeout(() => {
    outgoing.classList.add('hidden');
    outgoing.classList.remove('animate-slide-left-out');

    incoming.classList.remove('absolute', 'animate-slide-right-in');
    incoming.classList.add('opacity-100');
  }, 500);
});


//        src = 'https://njv.edu.pk/wp-content/uploads/2024/09/3-1024x683.jpg'; alt top mdcat 
//        src = 'https://njv.edu.pk/wp-content/uploads/2024/09/1-1024x683.jpg'; alt 100% scholarship
//        src = 'https://njv.edu.pk/wp-content/uploads/2024/09/2-1024x683.jpg';  admission in lumhs


const images = [
  {
    src: "https://njv.edu.pk/wp-content/uploads/2024/09/3-1024x683.jpg",
    alt: "MDCAT TOPPER ",
  },
  {
    src: "https://njv.edu.pk/wp-content/uploads/2024/09/1-1024x683.jpg",
    alt: "Ban alt 100% scholarship",
  },
  {
    src: "https://njv.edu.pk/wp-content/uploads/2024/09/2-1024x683.jpg",
    alt: "Admission at lumhs",
  },
];

const imgElements = images.map((image, index) => {
  const img = document.getElementById(`img${index + 1}`);
  img.src = image.src;
  img.alt = image.alt;
  return img;
});

const numElements = [...Array(3)].map(
  (_, index) => document.getElementById(`num${index + 1}`)
);
const textElements = [...Array(3)].map(
  (_, index) => document.getElementById(`text${index + 1}`)
);

function updateStyles(activeIndex) {
  imgElements.forEach((img, index) => {
    img.style.opacity = index === activeIndex ? "1" : "0";
    const isActive = index === activeIndex;
    numElements[index].classList.toggle("text-[#0f294d]", isActive);
    numElements[index].classList.toggle("font-bold", isActive);
    numElements[index].classList.toggle("text-[#d1d5db]", !isActive);
    numElements[index].classList.toggle("font-normal", !isActive);
    textElements[index].classList.toggle("text-[#111827]", isActive);
    textElements[index].classList.toggle("font-bold", isActive);
    textElements[index].classList.toggle("text-[#6b7280]", !isActive);
    textElements[index].classList.toggle("font-normal", !isActive);
  });
}

function showImage(num) {
  updateStyles(num - 1);
}

function resetImage() {
  updateStyles(0);
}
window.onload = resetImage;
