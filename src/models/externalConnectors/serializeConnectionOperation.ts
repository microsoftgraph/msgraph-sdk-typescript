import {PublicError} from '../publicError';
import {serializeEntity} from '../serializeEntity';
import {serializePublicError} from '../serializePublicError';
import {ConnectionOperation} from './connectionOperation';
import {ConnectionOperationStatus} from './connectionOperationStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConnectionOperation(writer: SerializationWriter, connectionOperation: ConnectionOperation | undefined = {} as ConnectionOperation) : void {
        serializeEntity(writer, connectionOperation)
        writer.writeObjectValue<PublicError>("error", connectionOperation.errorEscaped, serializePublicError);
        writer.writeEnumValue<ConnectionOperationStatus>("status", connectionOperation.status);
}
