<template>
    <div id="splitView">
        <Contacts />
        <div id="scroller">
            <div class="stage">
                <div class="container">
                    <div class="node"></div>
                    <div class="text">
                        <h1>Curriculum Vitae:</h1>
                        <div>
                            <h2>Wittmann Áron</h2>
                            <p>
                                Programming enthusiat, freelancer full-stack developer,
                                hobbyist game developer, and a bit of everything else.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="stage">
                <div class="container">
                    <div class="node"></div>
                    <div class="text">
                        <h1>About me:</h1>
                        <div>
                            <p>
                                I am a software developer with a passion for creating
                                beautiful and intuitive user interfaces. I have
                                experience in frontend development, back-end
                                development, and full-stack development.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="stage">
                <div class="container">
                    <div class="node"></div>
                    <div class="text">
                        <h1>Experiences:</h1>
                        <div>
                            <h2>Full Stack Developer</h2>
                            <h4>
                                Boronkay Faipari Szerszám Kft.<br/>
                                2021.09. - 2022.03.
                            </h4>
                            <ul>
                                <li>Developed Full-Stack Web application for the tracking and organizing of orders and tools internally.</li>
                                <li>Ensured security and ability to interact with multiple APIs and databases.</li>
                                <li>Played a key role in the development, improvement, and operation of web-based software.</li>
                            </ul>
                            <h2>Administration Assistant</h2>
                            <h4>
                                Saint-Gobain Hungary Ltd.<br/>
                                2016.06. - 2016.08.
                            </h4>
                            <ul>
                                <li>Helped organize and ensure the validity of incoming orders.</li>
                                <li>Ensured security and ability to interact with multiple APIs and databases.</li>
                                <li>Played a key role in the development, improvement, and operation of web-based software.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="stage">
                <div class="container">
                    <div class="node"></div>
                    <div class="text">
                        <h1>Education:</h1>
                        <div>
                            <h2>Computer Engineering</h2>
                            <h4>
                                Budapest Institute of Technology<br/>
                                2019. - present.
                            </h4>
                            <p>
                                I am currently studying Computer Engineering at the
                                Budapest Institute of Technology. 
                            </p>
                            <h2>Highschool</h2>
                            <h4>
                                Óbudai Highscool<br/>
                                2015. - 2019.
                            </h4>
                            <p>
                                I spent my highschool years in a class with an emphasis on mathematics, English and physics.<br/>
                                I started learning programming as a hobby during divis time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="stage">
                <div class="container">
                    <div class="node"></div>
                    <div class="text">
                        <h1>Skills:</h1>
                        <div class="dynamicList">
                            <div>
                                <div class="gridHeader">Programming Languages:</div>
                                <div class="gridElement">JavaScript</div><div class="gridElement">●●●●●</div>
                                <div class="gridElement">TypeScript</div><div class="gridElement">●●●●</div>
                                <div class="gridElement">Java</div><div class="gridElement">●●●●</div>
                                <div class="gridElement">C#</div><div class="gridElement">●●●●</div>
                                <div class="gridElement">C++</div><div class="gridElement">●●●●</div>
                            </div>
                            <div>
                                <div class="gridHeader">Frameworks:</div>
                                <div class="gridElement">Vue.js</div><div class="gridElement">●●●●●</div>
                                <div class="gridElement">Express.js</div><div class="gridElement">●●●●●</div>
                                <div class="gridElement">JQuery</div><div class="gridElement">●●●●</div>
                            </div>
                            <div>
                                <div class="gridHeader">Others:</div>
                                <div class="gridElement">HTML</div><div class="gridElement">●●●●●</div>
                                <div class="gridElement">Git</div><div class="gridElement">●●●●</div>
                                <div class="gridElement">Linux</div><div class="gridElement">●●●●</div>
                                <div class="gridElement">CSS</div><div class="gridElement">●●●●</div>
                                <div class="gridElement">SQL</div><div class="gridElement">●●●</div>
                            </div>
                            <div>
                                <div class="gridHeader">Personal:</div>
                                <div class="gridElement">Problem-solving</div><div class="gridElement">●●●●●</div>
                                <div class="gridElement">Critical Thinking</div><div class="gridElement">●●●●●</div>
                                <div class="gridElement">Communication</div><div class="gridElement">●●●●</div>
                                <div class="gridElement">Time Management</div><div class="gridElement">●●●●</div>
                                <div class="gridElement">Collaboration</div><div class="gridElement">●●●●</div>
                            </div>
                            <div>
                                <div class="gridHeader">Languages:</div>
                                <div class="gridElement">Hungarian</div><div class="gridElement">●●●●●</div>
                                <div class="gridElement">English</div><div class="gridElement">●●●●●</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="stage">
                <div class="container">
                    <div class="node"></div>
                    <div class="text">
                        <h1>Made with:</h1>
                        <div>
                            <ul>
                                <li>Vue 3</li>
                                <li>ScrollMagic</li>
                                <li>GSAP</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="@/scripts/HomeScript.js"></script>

<style scoped src="@/styles/Home.css"></style>