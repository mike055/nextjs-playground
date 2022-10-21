module.exports = {
    ci: {
        assert: {
            assertions: {
                'categories:performance': ['error', { minScore: 0.7, aggregationMethod: 'optimistic' }],
                'categories:accessibility': ['error', { minScore: 0.7, aggregationMethod: 'optimistic' }],
                'categories:seo': ['error', { minScore: 0.7, aggregationMethod: 'optimistic' }],
                'largest-contentful-paint': ['error', { maxNumericValue: 2500, aggregationMethod: 'optimistic' }],
                'cumulative-layout-shift': ['error', { maxNumericValue: 0.12, aggregationMethod: 'optimistic' }],
            },
        },
    },
};
