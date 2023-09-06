import { type AccessPackageResourceEnvironment } from './accessPackageResourceEnvironment';
import { type AccessPackageResourceEnvironmentCollectionResponse } from './accessPackageResourceEnvironmentCollectionResponse';
import { serializeAccessPackageResourceEnvironment } from './serializeAccessPackageResourceEnvironment';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAccessPackageResourceEnvironmentCollectionResponse(writer: SerializationWriter, accessPackageResourceEnvironmentCollectionResponse: AccessPackageResourceEnvironmentCollectionResponse | undefined = {} as AccessPackageResourceEnvironmentCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessPackageResourceEnvironmentCollectionResponse)
        writer.writeCollectionOfObjectValues<AccessPackageResourceEnvironment>("value", accessPackageResourceEnvironmentCollectionResponse.value, serializeAccessPackageResourceEnvironment);
}
