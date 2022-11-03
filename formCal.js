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
    };


    let hdObj = {
        style: hdStyl,
        parent: this.divMain,
        id: 'header',
        className: 'doch3',
        textContent: 'Azul Calendar',
        typ: 'h3',
		style: {
                margin: '10px',
                border: '1px solid green',
		},
    }

    azul.addElement(hdObj);

	const doc = azul.addElement(secObj);


    let hd2Obj = {
        style: hdStyl,
        parent: doc,
        id: 'docmain',
        className: 'doch3',
        textContent: 'Weekly Calender',
        typ: 'h3',
		style: {'border' : '1px solid purple',color: 'white', backgroundColor: 'blue', height: '2em', lineHeight: '2em'},
	};

    azul.addElement(hd2Obj);

    let hdfooterObj = {
        style: hdStyl,
        parent: azul.footer,
        id: 'footer',
        className: 'doch3',
        textContent: 'footer',
        typ: 'h3',
    }
//    azul.addElement(hdfooterObj);


    let calObj = {
        parent: doc,
        id: 'cal',
        className: 'calClass',
        typ: 'div',
		style: {
			margin: '10px 0',
            border: '1px dashed blue',
			minHeight: '200px',
			display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            columnGap: '5px',
		},
    }

    const cal = azul.addElement(calObj);

    let dayObj = {
        parent: cal,
        id: 'day',
        className: 'calDayClass',
        typ: 'div',
		style: {
            margin: '10px 0',
            border: '1px dashed green',
			minHeight: '200px',
			width: '14%',
		},
    }

	let dayHd = {
        id: 'day',
        className: 'doch3',
        typ: 'h3',
		style: {
			backgroundColor: 'blue',
			color: 'white',
		},
    }

	let calSched = {
        className: 'sched',
        typ: 'div',
		style: {
			backgroundColor: 'green',
			color: 'white',
			height: '50px',
			margin: '10px 0',
			textAlign: 'center',
			lineHeight: '50px',
		},
    }


	let calDayHd = ['Mo','Tu','We','Th','Fr','Sa','Su'];

	let calDaysDiv = [];
	for (let i=0; i<7; i++) {
		dayObj.id = 'day' + i
    	const calDay = azul.addElement(dayObj);
		calDaysDiv.push(calDay)
		dayHd.parent = calDay;
		dayHd.textContent = calDayHd[i];
		azul.addElement(dayHd);

		calSched.parent = calDay;
		calSched.textContent = 'am';
		azul.addElement(calSched);

		calSched.parent = calDay;
		calSched.textContent = 'pm';
		azul.addElement(calSched);

	}

// hour

    let schedObj = {
        parent: doc,
        id: 'calHour',
        className: 'calHour',
        typ: 'div',
		style: {
			margin: '10px 0',
            border: '1px solid black',
			minHeight: '100px',
			display: 'block',
		},
    };
	let schedDiv = azul.addElement(schedObj);

    let hourObj = {
        parent: schedDiv,
        className: 'calHour',
        typ: 'div',
		style: {
			margin: '2px 0',
            border: '1px solid black',
			height: '20px',
			display: 'block',
		},
    };



	let calMorHourHd = ['8:00','9:00','10:00','11:00','12:00','13:00'];
	let calAftHourHd = ['14:00','15:00','16:00','17:00','18:00','19:00','20:00'];

	let calHoursDiv = [];
	for (let i=0; i<calMorHourHd.length; i++) {
		hourObj.id = 'hour' + i
		hourObj.textContent = calMorHourHd[i];
    	let calHour = azul.addElement(hourObj);
		calHoursDiv.push(calHour)
	}


    document.body.appendChild(this.divMain);

}
