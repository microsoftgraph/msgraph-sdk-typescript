import {AllowedValue} from './allowedValue';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAllowedValue(writer: SerializationWriter, allowedValue: AllowedValue | undefined = {} as AllowedValue) : void {
        serializeEntity(writer, allowedValue)
        writer.writeBooleanValue("isActive", allowedValue.isActive);
}
