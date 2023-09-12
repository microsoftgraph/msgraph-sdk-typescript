import { type AllowedValue } from './allowedValue';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAllowedValue(writer: SerializationWriter, allowedValue: AllowedValue | undefined = {} as AllowedValue) : void {
        serializeEntity(writer, allowedValue)
        writer.writeBooleanValue("isActive", allowedValue.isActive);
}
