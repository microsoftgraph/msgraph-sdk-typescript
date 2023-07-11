import {AccessPackageCatalog} from './accessPackageCatalog';
import {AccessPackageRequestState} from './accessPackageRequestState';
import {AccessPackageRequestType} from './accessPackageRequestType';
import {AccessPackageResource} from './accessPackageResource';
import {AccessPackageResourceRequest} from './accessPackageResourceRequest';
import {serializeAccessPackageCatalog} from './serializeAccessPackageCatalog';
import {serializeAccessPackageResource} from './serializeAccessPackageResource';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageResourceRequest(writer: SerializationWriter, accessPackageResourceRequest: AccessPackageResourceRequest | undefined = {} as AccessPackageResourceRequest) : void {
        serializeEntity(writer, accessPackageResourceRequest)
        writer.writeObjectValue<AccessPackageCatalog>("catalog", accessPackageResourceRequest.catalog, serializeAccessPackageCatalog);
        writer.writeDateValue("createdDateTime", accessPackageResourceRequest.createdDateTime);
        writer.writeEnumValue<AccessPackageRequestType>("requestType", accessPackageResourceRequest.requestType);
        writer.writeObjectValue<AccessPackageResource>("resource", accessPackageResourceRequest.resource, serializeAccessPackageResource);
        writer.writeEnumValue<AccessPackageRequestState>("state", accessPackageResourceRequest.state);
}
