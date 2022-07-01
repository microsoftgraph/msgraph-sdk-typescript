import {createPrintOperationStatusFromDiscriminatorValue} from './createPrintOperationStatusFromDiscriminatorValue';
import {EntityImpl, PrintOperationStatusImpl} from './index';
import {PrintOperation} from './printOperation';
import {PrintOperationStatus} from './printOperationStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the print singleton. */
export class PrintOperationImpl extends EntityImpl implements PrintOperation {
    /** The DateTimeOffset when the operation was created. Read-only. */
    private _createdDateTime?: Date | undefined;
    /** The status property */
    private _status?: PrintOperationStatus | undefined;
    /**
     * Instantiates a new printOperation and sets the default values.
     * @param printOperationParameterValue 
     */
    public constructor(printOperationParameterValue?: PrintOperation | undefined) {
        super(printOperationParameterValue);
        this._createdDateTime = printOperationParameterValue?.createdDateTime;
        this._status = printOperationParameterValue?.status;
    };
    /**
     * Gets the createdDateTime property value. The DateTimeOffset when the operation was created. Read-only.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The DateTimeOffset when the operation was created. Read-only.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        if(value) {
            this._createdDateTime = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "status": n => { this.status = n.getObjectValue<PrintOperationStatusImpl>(createPrintOperationStatusFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.createdDateTime){
            writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.status){
            writer.writeObjectValue<PrintOperationStatusImpl>("status", (this.status instanceof PrintOperationStatusImpl? this.status as PrintOperationStatusImpl: new PrintOperationStatusImpl(this.status)));
        }
    };
    /**
     * Gets the status property value. The status property
     * @returns a PrintOperationStatusInterface
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status property
     * @param value Value to set for the status property.
     */
    public set status(value: PrintOperationStatus | undefined) {
        if(value) {
            this._status = value instanceof PrintOperationStatusImpl? value as PrintOperationStatusImpl: new PrintOperationStatusImpl(value);
        }
    };
}
