import {deserializeIntoAdditionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponse} from './deserializeIntoAdditionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponse';
import {AdditionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAdditionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAdditionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponse;
}
