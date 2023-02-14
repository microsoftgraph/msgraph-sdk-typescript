import {AccessPackageLocalizedText} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageLocalizedTextFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessPackageLocalizedText {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessPackageLocalizedText();
}
