import React, { Component } from 'react'

const companies = [
    { name: 'company1', jobs: ['job1-1', 'job1-2', 'job1-3'] },
    { name: 'company2', jobs: ['job2-1', 'job2-2', 'job2-3'] },
    { name: 'company3', jobs: ['job3-1', 'job3-2', 'job3-3'] }
]

const colibri =
{

    "Categories1":
    {
        "Groupe10": [
            {
                "device_name": "Rain 10detector",
            }
        ],
        "Groupe11": [
            {
                "device_name": "Rain11 detector",
            }
        ]
    },
    "Categories2":
    {
        "Groupe20": [
            {
                "device_name": "Rain 20detector",
            }
        ],
        "Groupe21": [
            {
                "device_name": "Rain21 detector",
            }
        ]
    }
}


export default class Madhurgarg extends Component {
    constructor() {
        super();
        this.state = {
            selectedCompany: 'company1',
            selectedCat: 'select',
            companies: companies,
            colibri: colibri,
            categorieta: colibri,
            categorieli: null,
            categorieid: null,
            groupta: [],
            groupli: null,
            groupid: null,
            deviceta: [],
            deviceli: null,
            deviceid: null


        }
         this.handleChange = this.handleChange.bind(this);
        //this.getCat = this.getCat.bind(this);
    }

    componentDidMount() {
    }

    handleChange(e) {
        console.log(this.state)
        this.setState({ selectedCompany: e.target.value })
    }

    handleChangeCat(e) {
        this.setState({ categorieid: e.target.value });
        this.setState({ groupta: colibri.Categories2 });
    }

    handleChangeGroup(e) {
        this.setState({ groupid: e.target.value });
        this.setState({ deviceta: colibri.Categories2.Groupe21 });
        console.log('colibri' + JSON.stringify(this.state.deviceta))

    }

    render() {
        let company = companies.filter(company => {
            return company.name === this.state.selectedCompany
        })

        let categorieli = Object.keys(this.state.categorieta).map((icon) => {
            return { label: icon, value: icon };
        });

        let groupli = Object.keys(this.state.groupta)
       //.filter(icon => (icon === Categories2))
        .map((icon) => {
            return { label: icon, value: icon, };
        });

        let deviceli = this.state.deviceta.map((icon) => {
            return { label: icon, value: icon.device_name};
        });

        // let test = 'categorieta.Categories2';
        //let  groupli = Object.keys(this.state.categorieta.Categories2).map((icon) => {
        //      return { label: icon, value: icon };
        // });

   

        /*  let groupli = Object.keys(this.state.groupta).map((icon) => {
            return { label: icon, value: icon };
        }); */

        console.log('grouli' + JSON.stringify(this.state.deviceta))

        return (
            <div>

                <select>
                    {
                        company[0].jobs.map((job, i) => {
                            return <option>{job}</option>
                        })
                    }
                </select>



                <select value={this.state.selectedCompany} onChange={this.handleChange.bind(this)}>
                    {
                      this.state.companies.map((company, i) => {
                            return <option>{company.name}</option>
                        })
                    }
                </select>




                <select value={this.state.categorieid} onChange={this.handleChangeCat.bind(this)}>
                    {
                        categorieli.map((company, i) => {
                            return <option>{company.value}</option>
                        })
                    }
                </select>
                <select value={this.state.groupid} onChange={this.handleChangeGroup.bind(this)}>
                    {
                        groupli.map((company, i) => {
                            return <option>{company.value}</option>
                        })
                    }
                </select>

                <select value={this.state.deviceid} >
                    {
                        deviceli.map((company, i) => {
                            return <option>{company.value}</option>
                        })
                    }
                </select>






            </div>

        )
    }
}






