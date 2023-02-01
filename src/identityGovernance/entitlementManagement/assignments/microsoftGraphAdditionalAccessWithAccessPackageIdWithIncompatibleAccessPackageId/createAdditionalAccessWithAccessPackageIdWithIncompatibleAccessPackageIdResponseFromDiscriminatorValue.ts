import {AdditionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAdditionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AdditionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AdditionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponse();
}
