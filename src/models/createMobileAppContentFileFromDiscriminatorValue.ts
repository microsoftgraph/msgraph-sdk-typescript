import {MobileAppContentFile} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileAppContentFileFromDiscriminatorValue(parseNode: ParseNode | undefined) : MobileAppContentFile {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MobileAppContentFile();
}
