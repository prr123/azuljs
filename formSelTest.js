  window.onload = (event) => {
    const azul = new HtmlPage;
    let pageObj = {
		id: 'divMain',
        append: 'true',
        style: {width: 'calc(100% - 300px)', border: '1px solid blue', minHeight: '300px',},
	};

	const divMain = azul.init(pageObj);

    let metaObj = {
        metaNames: [
            {name: 'description', content: 'a blog'},
            {name: 'author', content: 'prr'},
            {name: 'date', content: '1/10/2022'},
            ],
    };
    azul.addMeta(metaObj);

    let linkObj = {
        id: 'azulCss',
        type: 'text/css',
        href: 'azulLib.css',
    }
//    azul.addLink(linkObj);


    let stylObj = {};
    azul.addStyles(stylObj);

	let cssRuleObj = {
		cssRules:['.doch3 {color: blue; text-align: center;}'],
	};

	azul.addCssRule(cssRuleObj);


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
		border: '1px dashed green',
    };


    let hdObj = {
        style: hdStyl,
        parent: this.divMain,
        id: 'header',
        className: 'doch3',
        textContent: 'gdoc test',
        typ: 'h3',
		style: {
                margin: '10px',
                border: '1px solid green',
		},
    }

    azul.addElement(hdObj);

	const doc = azul.addElement(secObj);

    let selInpObj = {
        parent: doc,
        labName: 'Name',
        name: 'usrnam',
		input: inptest,
		selOptions: ['item1', 'item2', 'item3']
    }

	let inp = azul.addMdAltSel(selInpObj);

	function inptest(val) {
		if (azul.par1 != undefined) { azul.par1.remove(); }
		let txtStr = 'input: ' + val;
		let parObj ={typ:'p', parent: doc, textContent: txtStr, elNam: 'par1',}
		let resp = azul.addElement(parObj);
//		return inp.value;
	}
}
