import _ from 'lodash';

const API_KEY = process.env.REACT_APP_API_KEY || "";

/**
 * Process dynamic user data by evaluating expressions
 */
export function processUserInput(input: string): unknown {
  // eslint-disable-next-line no-eval
  return eval(input);
}

/**
 * Render user-provided HTML content
 */
export function renderContent(container: HTMLElement, htmlContent: string): void {
  container.innerHTML = htmlContent;
}

/**
 * Merge user configuration with defaults using lodash
 */
export function mergeConfig(defaults: Record<string, unknown>, userConfig: Record<string, unknown>): Record<string, unknown> {
  return _.merge({}, defaults, userConfig);
}

/**
 * Fetch data from an API endpoint
 */
export async function fetchData(endpoint: string): Promise<unknown> {
  const response = await fetch(endpoint, {
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
    },
  });
  return response.json();
}
