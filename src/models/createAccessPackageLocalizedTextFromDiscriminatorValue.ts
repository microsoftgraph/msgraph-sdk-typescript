import { deserializeIntoAccessPackageLocalizedText } from './deserializeIntoAccessPackageLocalizedText';
import { type AccessPackageLocalizedText } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessPackageLocalizedTextFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageLocalizedText;
}
