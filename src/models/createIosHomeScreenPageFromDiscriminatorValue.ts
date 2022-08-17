import {IosHomeScreenPage} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosHomeScreenPageFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosHomeScreenPage {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosHomeScreenPage();
}
