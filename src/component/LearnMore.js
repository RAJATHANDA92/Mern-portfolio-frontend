import React from "react";

const LearnMore = () => {
  return (
    <div>
      <b>MERN Stack development</b>
      <p>
        MERN is one of several variations of the MEAN stack (MongoDB Express
        Angular Node), where the traditional Angular.js front-end framework is
        replaced with React.js. Other variants include MEVN (MongoDB, Express,
        Vue, Node), and really any front-end JavaScript framework can work.
      </p>

      <br />
      <b>What is the MERN stack?</b>
      <p>
        MERN stands for MongoDB, Express, React, Node, after the four key
        technologies that make up the stack. MongoDB — document database
        Express(.js) — Node.js web framework React(.js) — a client-side
        JavaScript framework Node(.js) — the premier JavaScript web server
        Express and Node make up the middle (application) tier. Express.js is a
        server-side web framework, and Node.js is the popular and powerful
        JavaScript server platform. Regardless of which variant you choose,
        ME(RVA)N is the ideal approach to working with JavaScript and JSON, all
        the way through.
      </p>

      <br />

      <b>How does the MERN stack work?</b>
      <p>
        The MERN architecture allows you to easily construct a three-tier
        architecture (front end, back end, database) entirely using JavaScript
        and JSON.
        <h2>Mern Stack</h2>
        <h3>React.js front end</h3>
        The top tier of the MERN stack is React.js, the declarative JavaScript
        framework for creating dynamic client-side applications in HTML. React
        lets you build up complex interfaces through simple components, connect
        them to data on your back-end server, and render them as HTML. React's
        strong suit is handling stateful, data-driven interfaces with minimal
        code and minimal pain, and it has all the bells and whistles you'd
        expect from a modern web framework: great support for forms, error
        handling, events, lists, and more.
        <h3>Express.js and Node.js server tier</h3>
        The next level down is the Express.js server-side framework, running
        inside a Node.js server. Express.js bills itself as a “fast,
        unopinionated, minimalist web framework for Node.js,” and that is indeed
        exactly what it is. Express.js has powerful models for URL routing
        (matching an incoming URL with a server function), and handling HTTP
        requests and responses. By making XML HTTP Requests (XHRs) or GETs or
        POSTs from your React.js front end, you can connect to Express.js
        functions that power your application. Those functions, in turn, use
        MongoDB's Node.js drivers, either via callbacks or using promises, to
        access and update data in your MongoDB database.
        <h3>MongoDB database tier</h3>
        If your application stores any data (user profiles, content, comments,
        uploads, events, etc.), then you're going to want a database that's just
        as easy to work with as React, Express, and Node. That's where MongoDB
        comes in: JSON documents created in your React.js front end can be sent
        to the Express.js server, where they can be processed and (assuming
        they're valid) stored directly in MongoDB for later retrieval. Again, if
        you're building in the cloud, you'll want to look at Atlas. If you're
        looking to set up your own MERN stack, read on!
        <br />
      </p>
    </div>
  );
};

export default LearnMore;
