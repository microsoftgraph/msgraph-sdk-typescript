import {AllowedValue} from './allowedValue';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAllowedValue(allowedValue: AllowedValue | undefined = {} as AllowedValue, writer: SerializationWriter) : void {
        serializeEntity(writer, allowedValue)
        writer.writeBooleanValue("isActive", allowedValue.isActive);
}
