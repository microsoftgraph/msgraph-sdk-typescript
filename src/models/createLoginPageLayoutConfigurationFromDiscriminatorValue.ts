import { deserializeIntoLoginPageLayoutConfiguration } from './deserializeIntoLoginPageLayoutConfiguration';
import { type LoginPageLayoutConfiguration } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createLoginPageLayoutConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLoginPageLayoutConfiguration;
}
