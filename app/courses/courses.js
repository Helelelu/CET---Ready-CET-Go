// Courses
const courses = [
    { name: 'HTML for Beginners', type: 'Web Design Courses', image: 'course-images/HTML.webp', video: 'videos/HTML.mp4',
    description: "Embark on a journey into the heart of web development with our comprehensive HTML course. Whether you're a complete beginner or looking to solidify your understanding of the fundamentals, this course is designed to equip you with the essential skills to create and structure web content. \nBy the end of this course, you'll have the knowledge and confidence to create well-structured, responsive web pages. Whether you're aspiring to become a web developer or simply want to understand the language that powers the web, our HTML course is your gateway to a world of endless possibilities. Enroll today and start building the web of tomorrow!"},
    { name: 'CSS for Beginners', type: 'Web Design Courses', image: 'course-images/CSS.jpg', video: 'videos/CSS.mp4',
    description: "Unlock the power of style and design with our CSS Mastery course. Whether you're a budding web designer or a seasoned developer looking to enhance your styling skills, this course is your gateway to creating visually stunning and responsive websites. \nWhether you're aiming to become a front-end developer or enhance your web design skills, our CSS Mastery course empowers you to transform your ideas into visually captivating and well-styled websites. Join us on this creative journey and elevate your web design game. Enroll today!" },
    { name: 'JavaScript for Beginners', type: 'Web Design Courses', image: 'course-images/JavaScript.webp', video: 'videos/JavaScript.mp4',
    description: "Embark on a dynamic journey into the world of web development with our JavaScript Essentials course. Whether you're a novice coder or looking to amplify your front-end and back-end skills, this course is your key to mastering the language that breathes life into modern web applications. \nWhether you're aiming to become a full-stack developer or enhance your front-end capabilities, our JavaScript Essentials course equips you with the skills to build robust and interactive web applications. Join us on this transformative coding journey and bring your web development aspirations to life. Enroll today!"},
    { name: 'Python: Basics for Starters', type: 'Programming Courses', image: 'course-images/Python.png', video: 'videos/Python.mp4',
    description: "Embark on a journey into the world of programming excellence with our Python Programming course. Whether you're a complete beginner or an experienced developer looking to add a powerful language to your repertoire, this course is designed to unlock the full potential of Python. \nWhether you aspire to be a web developer, data scientist, or automation expert, our Python Programming course equips you with the skills to excel in a variety of domains. Join us on this dynamic coding journey and harness the versatility of Python. Enroll today!"},
    { name: 'C#: Basics for Starters', type: 'Programming Courses', image: 'course-images/CSharp.png', video: 'videos/CSharp.mp4',
    description: "Embark on a transformative journey into the realm of software development with our Mastering C# course. Whether you're a programming novice or a seasoned developer looking to expand your skill set, this course is your gateway to mastering the powerful and versatile C# language. \nWhether you aim to be a full-stack developer, a desktop application specialist, or a mobile app creator, our Mastering C# course provides the comprehensive knowledge and skills needed to excel in diverse development scenarios. Join us on this immersive coding journey and elevate your C# proficiency. Enroll today!"},
    { name: 'Java: Basics for Starters', type: 'Programming Courses', image: 'course-images/Java.jpg', video: 'videos/Java.mp4',
    description: "Embark on a Java journey that transcends the realms of software development with our comprehensive Java Mastery course. Whether you're new to programming or a seasoned developer aiming to master Java, this course is designed to equip you with the skills to build robust, scalable, and versatile applications. \nWhether you aspire to be a backend developer, enterprise architect, or mobile app creator, our Java Mastery course provides the comprehensive knowledge and skills needed to excel in diverse development scenarios. Join us on this transformative coding journey and elevate your Java proficiency. Enroll today!"},
    { name: 'React JS Full Course', type: 'Advanced Website and Web App Development', image: 'course-images/React.png', video: 'videos/React.mp4',
    description: "Embark on a transformative journey into the heart of modern web development with our React.js Essentials course. Whether you're a front-end enthusiast or a seasoned developer looking to master the art of building dynamic user interfaces, this course is your gateway to unleashing the power of React.js. \nWhether you're aiming to be a front-end developer or enhance your web development skills, our React.js Essentials course empowers you to create dynamic and engaging user interfaces. Join us on this journey and become proficient in the future of web development. Enroll today!"},
    { name: 'Flask Web Development', type: 'Advanced Website and Web App Development', image: 'course-images/Flask.png', video: 'videos/Flask.mp4',
    description: "Embark on a journey into the world of web development with our Flask Web Development course. Whether you're a Python enthusiast or a developer looking to master a lightweight and efficient web framework, this course is your gateway to building scalable and elegant web applications with Flask. \nWhether you're aspiring to be a full-stack developer or looking to create efficient and scalable web applications with Python, our Flask Web Development course provides the comprehensive knowledge and skills needed to excel in the dynamic world of web development. Join us on this coding journey and bring your Flask projects to life. Enroll today!"},
    { name: 'Tailwind CSS Fundamentals', type: 'Advanced Website and Web App Development', image: 'course-images/Tailwind CSS.jpg', video: 'videos/Tailwind CSS.mp4',
    description: "Unlock the full potential of modern web design with our Tailwind CSS Mastery course. Whether you're a front-end developer or a design enthusiast looking to streamline your workflow, this course is your key to mastering Tailwind CSS and creating stylish, responsive, and maintainable web interfaces. \nWhether you're a solo developer or collaborating with a team, our Tailwind CSS Mastery course empowers you to create visually stunning and responsive web interfaces efficiently. Join us on this creative journey and revolutionize your approach to web design. Enroll today!"},
    { name: 'PHP for Web Development', type: 'Advanced Website and Web App Development', image: 'course-images/PHP.jpg', video: 'videos/PHP.mp4',
    description: "Embark on a journey into the dynamic world of web development with our PHP Web Development course. Whether you're a budding developer or looking to enhance your server-side scripting skills, this course is your gateway to mastering PHP and building dynamic, scalable, and feature-rich websites.\nWhether you're aiming to be a full-stack developer or specialize in server-side scripting, our PHP Web Development course provides the comprehensive knowledge and skills needed to excel in a variety of web development scenarios. Join us on this coding journey and bring your PHP projects to life. Enroll today!"},
    { name: 'C\+\+ Full Course', type: 'Advanced Programming Courses', image: 'course-images/CPlusPlus.jpg', video: 'videos/CPlusPlus.mp4',
    description: "Embark on a comprehensive exploration of software development with our C++ Programming course. Whether you're a programming novice or a seasoned developer looking to expand your repertoire, this course is designed to equip you with the skills to master C++ — a versatile and powerful programming language. \nWhether you aspire to be a systems programmer, game developer, or contribute to cutting-edge technologies, our C++ Programming course provides the comprehensive knowledge and skills needed to excel in the diverse world of software development. Join us on this coding journey and elevate your C++ proficiency. Enroll today!"},
    { name: 'SQL Fundamentals', type: 'Backend Programming Courses', image: 'course-images/SQL.png', video: 'videos/SQL.mp4',
    description: "Embark on a journey into the heart of data management with our SQL Fundamentals course. Whether you're a budding data analyst, a software developer, or a business professional seeking to harness the power of databases, this course is designed to equip you with the essential skills to master Structured Query Language (SQL). \nWhether you aim to be a database administrator, data analyst, or a developer working with databases, our SQL Fundamentals course provides the comprehensive knowledge and skills needed to excel in the dynamic field of data management. Join us on this informative journey and unlock the full potential of SQL. Enroll today!"},
];

function loadCourses() {
    const courseSelection = document.getElementById('courseSelection');

    // Creating HTML Elements
    courses.forEach((course, index) => {
        const courseBox = document.createElement('div');
        courseBox.className = 'course-box';
        courseBox.setAttribute('data-index', index); 

        const courseImage = document.createElement('img');
        courseImage.className = 'course-image';
        courseImage.src = course.image;

        const courseName = document.createElement('div');
        courseName.className = 'course-name';

        const courseTitle = document.createElement('p');
        courseTitle.className = 'page-text course-title';
        courseTitle.textContent = course.name;

        const courseType = document.createElement('p');
        courseType.className = 'page-text course-type';
        courseType.textContent = course.type;

        // Adding elements to div class course-box
        courseBox.appendChild(courseImage);
        courseBox.appendChild(courseName);
        courseName.appendChild(courseTitle);
        courseName.appendChild(courseType);

        // Add click event listener to each course box
        courseBox.addEventListener('click', function () {
            navigateToCourseDetail(index);
        });

        // Append div class course-box to the div class course-selection
        courseSelection.appendChild(courseBox);
    });
}

// Function to navigate to another HTML file with course details
function navigateToCourseDetail(index) {
    const course = courses[index];
    window.location.href = `course-detail.html?name=${course.name}&video=${course.video}&description=${course.description}`;
}

window.onload = loadCourses;
