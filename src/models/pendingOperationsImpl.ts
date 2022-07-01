import {createPendingContentUpdateFromDiscriminatorValue} from './createPendingContentUpdateFromDiscriminatorValue';
import {PendingContentUpdateImpl} from './index';
import {PendingContentUpdate} from './pendingContentUpdate';
import {PendingOperations} from './pendingOperations';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PendingOperationsImpl implements PendingOperations {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** A property that indicates that an operation that might update the binary content of a file is pending completion. */
    private _pendingContentUpdate?: PendingContentUpdate | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new pendingOperations and sets the default values.
     * @param pendingOperationsParameterValue 
     */
    public constructor(pendingOperationsParameterValue?: PendingOperations | undefined) {
        this._additionalData = pendingOperationsParameterValue?.additionalData ? pendingOperationsParameterValue?.additionalData! : {};
        this._pendingContentUpdate = pendingOperationsParameterValue?.pendingContentUpdate;
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
     * Gets the pendingContentUpdate property value. A property that indicates that an operation that might update the binary content of a file is pending completion.
     * @returns a PendingContentUpdateInterface
     */
    public get pendingContentUpdate() {
        return this._pendingContentUpdate;
    };
    /**
     * Sets the pendingContentUpdate property value. A property that indicates that an operation that might update the binary content of a file is pending completion.
     * @param value Value to set for the pendingContentUpdate property.
     */
    public set pendingContentUpdate(value: PendingContentUpdate | undefined) {
        if(value) {
            this._pendingContentUpdate = value instanceof PendingContentUpdateImpl? value : new PendingContentUpdateImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.pendingContentUpdate){
            writer.writeObjectValue<PendingContentUpdateImpl>("pendingContentUpdate", (!this.pendingContentUpdate || this.pendingContentUpdate instanceof PendingContentUpdateImpl? this.pendingContentUpdate : new PendingContentUpdateImpl(this.pendingContentUpdate)));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
