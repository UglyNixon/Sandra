import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

export const AppRouter = () => (

    <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
            <Route
                key={path}
                path={path}
                element={(
                    <Suspense fallback={<div />}>
                        <div className="page-wrapper">
                            {element}
                        </div>
                    </Suspense>
                )}
            />
        ))}
    </Routes>

);
