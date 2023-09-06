import { type AccessPackageCatalog } from './accessPackageCatalog';
import { AccessPackageRequestState } from './accessPackageRequestState';
import { AccessPackageRequestType } from './accessPackageRequestType';
import { type AccessPackageResource } from './accessPackageResource';
import { type AccessPackageResourceRequest } from './accessPackageResourceRequest';
import { createAccessPackageCatalogFromDiscriminatorValue } from './createAccessPackageCatalogFromDiscriminatorValue';
import { createAccessPackageResourceFromDiscriminatorValue } from './createAccessPackageResourceFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { serializeAccessPackageCatalog } from './serializeAccessPackageCatalog';
import { serializeAccessPackageResource } from './serializeAccessPackageResource';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

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
