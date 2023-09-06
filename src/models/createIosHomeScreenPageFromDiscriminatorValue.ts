import { deserializeIntoIosHomeScreenPage } from './deserializeIntoIosHomeScreenPage';
import { type IosHomeScreenPage } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIosHomeScreenPageFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosHomeScreenPage;
}
