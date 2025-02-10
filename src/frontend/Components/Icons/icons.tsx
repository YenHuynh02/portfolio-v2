const getImage = (name: string): string => {
    try {
        return require(`./icons8-${name}`);
    }
    catch (err) {
        console.log(`Error loading image: ${name}`, err);
        return '';
    }
};

const imgNames = ['angularjs.png', 'apache.png', 'arduino.png', 'aws.png', 'bootstrap.png', 'c.png', 'cpp.png', 'cs.png', 'database.gif', 'docker.png', 'figma.gif', 'html.gif', 'java.gif', 'javascript.gif', 'nodejs.png', 'php.png', 'postman.png', 'python.gif', 'r.png', 'react.gif', 'rest.png', 'rust.gif', 'sass.png', 'sql.png', 'typescript.png'];

const images: Record<string, string> = {}; // Initialize an object

imgNames.forEach((name) => {
    images[name] = getImage(name);
});

export default images;