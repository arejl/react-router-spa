import React, { useContext } from 'react';
import { useRouteMatch, Link, Switch, Route } from 'react-router-dom';
import { Menu } from 'antd';
import ThemeContext from '../../ThemeContext';
import works from '../../data/works';
import CaseStudy from '../CaseStudy';

const Works = () => {
  let { path, url } = useRouteMatch();
  const theme = useContext(ThemeContext);
  return (
    <>
      <h1>Ils nous ont fait confiance</h1>
      <h2>Au fil des années, nous avons pu accompagner les meilleurs.</h2>
      <p>Découvrez pas à pas comment nous avons été présents pour lancer vos marques préférées : cliquez sur le nom d'un de nos clients pour en savoir plus.</p>
      <Menu mode="horizontal" theme={theme.currentTheme} style={{textAlign:'center', paddingTop:'30px'}}>
          {works.map(caseStudy => <Menu.Item key={`${caseStudy.slug}`}><Link to={`${url}/${caseStudy.slug}-study-case`}><strong>{caseStudy.name}</strong></Link></Menu.Item>)}
      </Menu>
      <Switch>
        <Route path={`${path}/:caseStudySlug`}>
          <CaseStudy/>
        </Route>
      </Switch>
    </>
  );
}
export default Works;