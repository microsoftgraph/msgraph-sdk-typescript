import {AccessPackageResourceEnvironment} from './accessPackageResourceEnvironment';
import {AccessPackageResourceEnvironmentCollectionResponse} from './accessPackageResourceEnvironmentCollectionResponse';
import {createAccessPackageResourceEnvironmentFromDiscriminatorValue} from './createAccessPackageResourceEnvironmentFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeAccessPackageResourceEnvironment} from './serializeAccessPackageResourceEnvironment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageResourceEnvironmentCollectionResponse(accessPackageResourceEnvironmentCollectionResponse: AccessPackageResourceEnvironmentCollectionResponse | undefined = {} as AccessPackageResourceEnvironmentCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(accessPackageResourceEnvironmentCollectionResponse),
        "value": n => { accessPackageResourceEnvironmentCollectionResponse.value = n.getCollectionOfObjectValues<AccessPackageResourceEnvironment>(createAccessPackageResourceEnvironmentFromDiscriminatorValue); },
    }
}
