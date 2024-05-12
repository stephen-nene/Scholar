import React from "react";
import { Link } from "react-router-dom";

export default function Home({ darkmode }) {
    return (
        <div className={`-3 ${darkmode ? 'bg-gray-100' : 'bg-gray-950 text-white'} min-h-screen`}>

            {/* Hero Section */}
            <section className={`${darkmode ? 'bg-' : 'bg-gray-7'}  text-center py-20`}>
                <h1 className="text-5xl font-bold mb-4">Welcome to Your AuthAppp</h1>
                <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis eget nunc ut consequat.</p>
                <button className="bg-sky-500 text-gray-900 px-6 py-2 rounded-full mt-8 hover:bg-sky-600"><Link to={'/login'}>Get Started</Link></button>
            </section>

            {/* Features Section */}
            <section className="py-12 px-8">
                <h2 className="text-2xl font-bold mb-6">Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Add feature cards here */}
                    <div className={`${darkmode ? 'bg-white' : 'bg-gray-700'} p-6 rounded-lg shadow-md`}>
                        <h3 className="text-xl font-bold mb-4">Feature 1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className={`${darkmode ? 'bg-white' : 'bg-gray-700'} p-6 rounded-lg shadow-md`}>
                        <h3 className="text-xl font-bold mb-4">Feature 2</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className={`${darkmode ? 'bg-white' : 'bg-gray-700'} p-6 rounded-lg shadow-md`}>
                        <h3 className="text-xl font-bold mb-4">Feature 3</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </section>


            <section className="py-12 px-8">
                <h2 className="text-2xl font-bold mb-6">Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Service 1: Learning and Revision Materials */}
                    <div className={`${darkmode ? 'bg-white' : 'bg-gray-700'} p-6 rounded-lg shadow-md`}>
                        <img src="https://images.unsplash.com/photo-1714892207846-2d617a1aebe1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D" alt="Learning and Revision Materials" className="w-full rounded-lg mb-4" />
                        <h3 className="text-xl font-bold mb-2">Learning and Revision Materials</h3>
                        <p>English description for Learning and Revision Materials.</p>
                        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Learn More</button>
                    </div>
                    {/* Service 2: Online Classes */}
                    <div className={`${darkmode ? 'bg-white' : 'bg-gray-700'} p-6 rounded-lg shadow-md`}>
                        <img src="https://images.unsplash.com/photo-1714892207846-2d617a1aebe1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D" alt="Online Classes" className="w-full rounded-lg mb-4" />
                        <h3 className="text-xl font-bold mb-2">Online Classes</h3>
                        <p>English description for Online Classes.</p>
                        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Learn More</button>
                    </div>
                    {/* Service 3: Career Guidance */}
                    <div className={`${darkmode ? 'bg-white' : 'bg-gray-700'} p-6 rounded-lg shadow-md`}>
                        <img src="https://images.unsplash.com/photo-1714892207846-2d617a1aebe1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D" alt="Career Guidance" className="w-full rounded-lg mb-4" />
                        <h3 className="text-xl font-bold mb-2">Career Guidance</h3>
                        <p>English description for Career Guidance.</p>
                        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Learn More</button>
                    </div>
                    {/* Service 4: Service Name */}
                    <div className={`${darkmode ? 'bg-white' : 'bg-gray-700'} p-6 rounded-lg shadow-md`}>
                        <img src="https://images.unsplash.com/photo-1714892207846-2d617a1aebe1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D" alt="Service Name" className="w-full rounded-lg mb-4" />
                        <h3 className="text-xl font-bold mb-2">Service Name</h3>
                        <p>English description for Service Name.</p>
                        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Learn More</button>
                    </div>
                    {/* Service 5: Service Name */}
                    <div className={`${darkmode ? 'bg-white' : 'bg-gray-700'} p-6 rounded-lg shadow-md`}>
                        <img src="https://images.unsplash.com/photo-1714892207846-2d617a1aebe1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D" alt="Service Name" className="w-full rounded-lg mb-4" />
                        <h3 className="text-xl font-bold mb-2">Service Name</h3>
                        <p>English description for Service Name.</p>
                        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Learn More</button>
                    </div>
                    {/* Service 6: Service Name */}
                    <div className={`${darkmode ? 'bg-white' : 'bg-gray-700'} p-6 rounded-lg shadow-md`}>
                        <img src="https://images.unsplash.com/photo-1714892207846-2d617a1aebe1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D" alt="Service Name" className="w-full rounded-lg mb-4" />
                        <h3 className="text-xl font-bold mb-2">Service Name</h3>
                        <p>English description for Service Name.</p>
                        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Learn More</button>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-12 px-8">
                <h2 className="text-2xl font-bold mb-6">About us</h2>
                <p>image</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim dolor eget mauris eleifend, eget luctus urna ultrices. Cras in magna nec lacus eleifend tincidunt.</p>
            </section>

            <section className="py-12 px-8">
                <h2 className="text-2xl font-bold mb-6">Courses Offered</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim dolor eget mauris eleifend, eget luctus urna ultrices. Cras in magna nec lacus eleifend tincidunt.</p>
            </section>


            <section className="py-12 px-8">
                <h2 className="text-2xl font-bold mb-6">popular Courses Offered</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim dolor eget mauris eleifend, eget luctus urna ultrices. Cras in magna nec lacus eleifend tincidunt.</p>
                <button>Browse more courses</button>
            </section>


            <section className="py-12 px-8">
                <h2 className="text-2xl font-bold mb-6">Stats</h2>
                <button>stidents enrolled</button>
                <span>rating</span>
                <span>Instaructors</span>
                <span>Students</span>
                <span>Courses</span>
            </section>

            <section className="py-12 px-8">
                <h2 className="text-2xl font-bold mb-6">Get news</h2>
                <button>stidents enrolled</button>
                <span>rating</span>
                <span>Instaructors</span>
            </section>
            <section className="py-12 px-8">
                <h2 className="text-2xl font-bold mb-6">Student reviews</h2>
                <button>stidents enrolled</button>
                <span>rating</span>
                <span>Instaructors</span>
            </section>


        </div>
    );
}
