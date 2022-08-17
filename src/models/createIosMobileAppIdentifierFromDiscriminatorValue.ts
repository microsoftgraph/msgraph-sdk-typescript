import {IosMobileAppIdentifier} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosMobileAppIdentifierFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosMobileAppIdentifier {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosMobileAppIdentifier();
}
