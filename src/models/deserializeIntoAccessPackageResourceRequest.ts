import {AccessPackageCatalog} from './accessPackageCatalog';
import {AccessPackageRequestState} from './accessPackageRequestState';
import {AccessPackageRequestType} from './accessPackageRequestType';
import {AccessPackageResource} from './accessPackageResource';
import {AccessPackageResourceRequest} from './accessPackageResourceRequest';
import {createAccessPackageCatalogFromDiscriminatorValue} from './createAccessPackageCatalogFromDiscriminatorValue';
import {createAccessPackageResourceFromDiscriminatorValue} from './createAccessPackageResourceFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeAccessPackageCatalog} from './serializeAccessPackageCatalog';
import {serializeAccessPackageResource} from './serializeAccessPackageResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageResourceRequest(accessPackageResourceRequest: AccessPackageResourceRequest | undefined = {} as AccessPackageResourceRequest) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(accessPackageResourceRequest),
        "catalog": n => { accessPackageResourceRequest.catalog = n.getObjectValue<AccessPackageCatalog>(createAccessPackageCatalogFromDiscriminatorValue); },
        "createdDateTime": n => { accessPackageResourceRequest.createdDateTime = n.getDateValue(); },
        "requestType": n => { accessPackageResourceRequest.requestType = n.getEnumValue<AccessPackageRequestType>(AccessPackageRequestType); },
        "resource": n => { accessPackageResourceRequest.resource = n.getObjectValue<AccessPackageResource>(createAccessPackageResourceFromDiscriminatorValue); },
        "state": n => { accessPackageResourceRequest.state = n.getEnumValue<AccessPackageRequestState>(AccessPackageRequestState); },
    }
}
