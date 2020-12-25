import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import CollectionOverviewContailer from '../../components/collection-overview/collection-overview.container';
import CollectionContailer from '../collection/collection.container';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

const ShopPage = ({ fetchCollectionsStart, match }) => { 
    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart])

    return (
        <div className='shop-page'>
            <Route 
                exact path={`${match.path}`}
                component={CollectionOverviewContailer}
            />
            <Route 
                path={`${match.path}/:collectionId`} 
                component={CollectionContailer} 
            />
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(
    null,
    mapDispatchToProps
) (ShopPage);