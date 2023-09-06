import { type PackageEscaped } from './packageEscaped';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePackageEscaped(writer: SerializationWriter, packageEscaped: PackageEscaped | undefined = {} as PackageEscaped) : void {
        writer.writeStringValue("@odata.type", packageEscaped.odataType);
        writer.writeStringValue("type", packageEscaped.type);
        writer.writeAdditionalData(packageEscaped.additionalData);
}
