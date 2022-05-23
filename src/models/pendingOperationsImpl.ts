import {createPendingContentUpdateFromDiscriminatorValue} from './createPendingContentUpdateFromDiscriminatorValue';
import {PendingContentUpdateImpl} from './index';
import {PendingContentUpdate} from './pendingContentUpdate';
import {PendingOperations} from './pendingOperations';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PendingOperationsImpl implements AdditionalDataHolder, Parsable, PendingOperations {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** A property that indicates that an operation that might update the binary content of a file is pending completion. */
    public pendingContentUpdate?: PendingContentUpdate | undefined;
    /**
     * Instantiates a new pendingOperations and sets the default values.
     * @param pendingOperationsParameterValue 
     */
    public constructor(pendingOperationsParameterValue?: PendingOperations | undefined) {
        this.additionalData = pendingOperationsParameterValue?.additionalData ? pendingOperationsParameterValue?.additionalData! : {}
        this.pendingContentUpdate = pendingOperationsParameterValue?.pendingContentUpdate ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "pendingContentUpdate": n => { this.pendingContentUpdate = n.getObjectValue<PendingContentUpdateImpl>(createPendingContentUpdateFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.pendingContentUpdate){
        writer.writeObjectValue<PendingContentUpdateImpl>("pendingContentUpdate", new PendingContentUpdateImpl(this.pendingContentUpdate));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
