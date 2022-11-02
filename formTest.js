  window.onload = (event) => {
    const azul = new HtmlPage;
    let pageObj = {
        mainDiv: {
            style: {
                width: 'calc(100% - 300px)',
                border: '1px solid blue',
                minHeight: '300px',
            },
            id: 'divMain',
        },
	};
	const divMain = azul.init(pageObj);

	let headerObj = {
		id: 'header',
		menuObj: {
	    	id: 'mainMenu',
			style: {
    			width: '300px',
    			minHeight: '500px',
    			margin: '10px',
    			border: '1px solid green',
    			position: 'absolute',
    			top: '0px',
   				left: '0px',
    			zIndex: '1',
    			backgroundColor: 'white',
    			display: 'block',
				parent: azul.doc,
			},
			MainMenu: {
				home: '',
				test: 'gdocTest.json',
				products: 'products.json',
				services: 'services.json',
				examples: 'example.json',
				Blogs: 'blogs.json',
			},
		},

    };

    let metaObj = {
        metaNames: [
            {name: 'description', content: 'a blog'},
            {name: 'author', content: 'prr'},
            {name: 'date', content: '1/10/2022'},
            ],
    };

    let linkObj = {
        id: 'azulCss',
        type: 'text/css',
        href: 'azulLib.css',
    }

    azul.addMeta(metaObj);

//    azul.addLink(linkObj);


    let stylObj = {};
    azul.addStyles(stylObj);

	let secObj = {
		typ: 'section',
		parent: this.divMain,
		id: 'doc',
 		name: 'docmain',
      className: 'azulSection',
		style: {
                minHeight: '500px',
                margin: '10px',
                border: '1px solid Tomato',
                position: 'relative',
		},
	};


    let hdStyl = {
        color: 'MediumPurple',
        margin: 'auto',
        textAlign: 'center',
        padding: '0.5em',
    };


    let hdObj = {
        style: hdStyl,
        parent: this.divMain,
        id: 'header',
        className: 'doch3',
        textContent: 'gdoc test',
        typ: 'h3',
    }

    azul.addElement(hdObj);

	const doc = azul.addElement(secObj);


    let hd2Obj = {
        style: hdStyl,
        parent: azul.doc,
        id: 'docmain',
        className: 'doch3',
        textContent: 'docmain',
        typ: 'h3',
    }
 //   azul.addElement(hd2Obj);

    let hdfooterObj = {
        style: hdStyl,
        parent: azul.footer,
        id: 'footer',
        className: 'doch3',
        textContent: 'footer',
        typ: 'h3',
    }
//    azul.addElement(hdfooterObj);


    document.body.appendChild(this.divMain);

}
