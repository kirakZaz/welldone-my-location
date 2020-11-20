import { createElement } from 'react';

const Providers = ({ children, providers }) => providers.reduceRight((acc, c) => createElement(c, {}, acc), children);

export default Providers;