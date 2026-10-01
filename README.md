🎓 SGPA & CGPA Calculator

A simple, fast, and student-friendly SGPA & CGPA Calculator designed primarily for engineering students following the VTU grading system.

The application helps students calculate their semester SGPA from marks and credits, generate a temporary grade card, share their result as a PDF, and calculate their overall CGPA from semester-wise SGPA values.

🌐 Live Demo

Open SGPA Calculator

✨ Features
📊 SGPA Calculator

Calculate SGPA using subject marks and credits.

Automatically calculate grade points and letter grades.

Supports marks from 0–100.

Displays subject-wise:

Marks

Credits

Letter Grade

Grade Point

Pass/Fail status

Calculates SGPA up to 2 decimal places.

🎓 Stream & Semester Support

The calculator provides predefined subject structures for different engineering streams and cycles, including:

CSE

Physics Cycle

Chemistry Cycle

Third Semester EC option

Fourth Semester CSE

EEE / EC

Physics Cycle

Chemistry Cycle

Third Semester EC

Fourth Semester EC

Other Branches

Custom subject entry

The application also includes predefined subject names, course codes, and credit values for supported semesters.

📝 Custom Subjects

For branches or subjects not covered by the predefined lists, users can enter:

Subject name

Marks

Credits

This makes the calculator flexible for different academic structures.

🧾 Temporary Grade Card

After calculating SGPA, users can generate a temporary grade card containing:

Student name

Stream

Subject details

Credits

Marks

Letter grades

Grade points

Pass/Fail status

Calculated SGPA

Date and time of generation

The grade card can be downloaded as an image.

📄 PDF Sharing

The application can generate an SGPA Grade Card PDF.

On supported devices, the generated PDF can be shared directly using the browser's native sharing functionality. Otherwise, the PDF is downloaded for manual sharing.

📈 CGPA Calculator

A separate CGPA calculator allows students to:

Enter SGPA for multiple semesters.

Add additional semesters dynamically.

Calculate overall CGPA.

Enter student name, branch, and academic year.

Generate a downloadable CGPA report.

📱 Responsive Design

The interface is designed to work across:

💻 Desktop

💻 Laptop

📱 Mobile

📟 Tablet

Mobile-specific responsive styling is included for smaller screens.

📲 Progressive Web App Support

The project includes:

manifest.json

Application icons

Service worker

Standalone application configuration

This provides the foundation for installing the calculator as a web app on supported browsers.

🧮 How SGPA Is Calculated

The calculator uses the standard credit-weighted SGPA formula:

SGPA = Σ(Credit × Grade Point) / Σ(Credit)


Where:

Credit = Credit value of the subject

Grade Point = Grade point obtained for the subject

Σ(Credit) = Total credits for the semester

Grade Point System
Marks	Letter Grade	Grade Point
90–100	O	10
80–89	A+	9
70–79	A	8
60–69	B+	7
55–59	B	6
50–54	C	5
40–49	P	4
0–39	F	0

Note: Grade boundaries are based on the grading logic currently implemented in the application. Always verify the applicable grading scheme with your university/VTU regulations.

📈 Example

Suppose a student has the following results:

Subject	Credits	Grade	Grade Point
Engineering Mathematics	4	A	8
Data Structures	3	A+	9
Computer Networks	4	B+	7
Database Systems	3	O	10
Programming Lab	2	A	8

Calculation:

Total Credits = 16

Weighted Grade Points
= (4×8) + (3×9) + (4×7) + (3×10) + (2×8)
= 133

SGPA
= 133 / 16
= 8.31

📊 CGPA Calculation

The CGPA calculator takes SGPA values from completed semesters and calculates their average.

CGPA = Sum of SGPA values / Number of semesters


For example:

Semester 1 = 8.20
Semester 2 = 8.60
Semester 3 = 8.40

CGPA = (8.20 + 8.60 + 8.40) / 3
     = 8.40


The CGPA tool currently calculates the average of entered semester SGPA values rather than using semester-credit weighting.

🛠️ Technologies Used

This is a client-side web application and does not require a backend server.

HTML5 — Structure and content

CSS3 — Styling and responsive design

JavaScript — Calculator logic and dynamic UI

W3.CSS — UI components and utility styling

Font Awesome — Icons

Google Fonts — Typography

html2canvas — Grade-card image generation

jsPDF — PDF generation

Web App Manifest — PWA configuration

Service Worker — Web app caching foundation

GitHub Pages — Deployment

📂 Project Structure
sgpacalculator-abhi/
│
├── index.html
├── abhisgpa.html
├── sgpa_sgpa1.html
├── cgpa.html
│
├── styles.css
├── abhi.css
│
├── manifest.json
├── service-worker.js
│
├── icon-192.png
├── icon-5123.png
├── icon-51234.png
├── icon-12345.png
│
├── Sgpa-by-abhi.png.jpg
├── abhi-sgpa-mobile-version.jpg
├── sgpa-by-abhi-darkmode-ui..jpg
├── sgpa-by-abhi-homepage-interface.jpg
├── sgpa-by-abhi-homepage.jpg
├── sgpa-input-form.jpg
├── sgpa-result-display.jpeg.jpg
│
└── README.md


The repository also contains additional HTML pages and supporting assets for the calculator, profile, gallery, and related pages.

🚀 Getting Started

Since this project uses plain HTML, CSS, and JavaScript, no package installation or build process is required.

1. Clone the repository
git clone https://github.com/Abhishekkb-work/sgpacalculator-abhi.git

2. Open the project
cd sgpacalculator-abhi

3. Run locally

You can open index.html directly in a browser.

For a better local development experience, use a simple local server such as VS Code Live Server.

🌍 Deployment

The project is deployed using GitHub Pages.

Live website:

https://abhishekkb-work.github.io/sgpacalculator-abhi/

To deploy your own version:

Fork or clone the repository.

Push your changes to GitHub.

Open Settings → Pages.

Select the desired branch and root folder.

Save the configuration.

GitHub Pages will publish the website.

🖼️ Screenshots
Homepage

SGPA Input Form

SGPA Result

Mobile Version

🎯 Why This Project?

Calculating SGPA manually can be time-consuming, especially when a semester contains several subjects with different credit values.

This project was created to make the process:

⚡ Faster

🎯 Easier

📱 Accessible on mobile devices

🧮 Less error-prone

📄 Easier to document and share

It can also help students estimate their SGPA before official results are released.

⚠️ Disclaimer

This calculator is intended as an academic utility tool.

The calculated SGPA/CGPA should be treated as an estimate based on the grading rules implemented in this application. Official university results and regulations should always be considered the final authority.

Subject lists, credits, grading rules, and academic regulations may change between schemes, branches, batches, and institutions.

👨‍💻 Developer
Abhishek Bagewadi

Built with ❤️ for engineering students.

🌐 Live Project: SGPA Calculator

💻 GitHub: Abhishekkb-work

📧 Email: akbagewadii@gmail.com

💼 LinkedIn: Abhishek Bagewadi

🤝 Contributing

Contributions, suggestions, and improvements are welcome.

If you find a bug or have an idea for a new feature:

Fork the repository.

Create a new branch.

Make your changes.

Commit your changes.

Push the branch.

Open a Pull Request.

You can also open an issue to report bugs or suggest improvements.

⭐ Support

If this project helped you calculate your SGPA or CGPA, consider giving the repository a ⭐ on GitHub.

Made with ❤️ by Abhishek Bagewadi
