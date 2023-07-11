import {AccessPackageResourceEnvironment} from './accessPackageResourceEnvironment';
import {AccessPackageResourceEnvironmentCollectionResponse} from './accessPackageResourceEnvironmentCollectionResponse';
import {serializeAccessPackageResourceEnvironment} from './serializeAccessPackageResourceEnvironment';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageResourceEnvironmentCollectionResponse(writer: SerializationWriter, accessPackageResourceEnvironmentCollectionResponse: AccessPackageResourceEnvironmentCollectionResponse | undefined = {} as AccessPackageResourceEnvironmentCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessPackageResourceEnvironmentCollectionResponse)
        writer.writeCollectionOfObjectValues<AccessPackageResourceEnvironment>("value", accessPackageResourceEnvironmentCollectionResponse.value, serializeAccessPackageResourceEnvironment);
}
