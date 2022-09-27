import {createResultInfoFromDiscriminatorValue} from './createResultInfoFromDiscriminatorValue';
import {Entity, ResultInfo} from './index';
import {OperationStatus} from './operationStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of agreementAcceptance entities. */
export class CommsOperation extends Entity implements Parsable {
    /** Unique Client Context string. Max limit is 256 chars. */
    private _clientContext?: string | undefined;
    /** The result information. Read-only. */
    private _resultInfo?: ResultInfo | undefined;
    /** The status property */
    private _status?: OperationStatus | undefined;
    /**
     * Gets the clientContext property value. Unique Client Context string. Max limit is 256 chars.
     * @returns a string
     */
    public get clientContext() {
        return this._clientContext;
    };
    /**
     * Sets the clientContext property value. Unique Client Context string. Max limit is 256 chars.
     * @param value Value to set for the clientContext property.
     */
    public set clientContext(value: string | undefined) {
        this._clientContext = value;
    };
    /**
     * Instantiates a new commsOperation and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.commsOperation";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "clientContext": n => { this.clientContext = n.getStringValue(); },
            "resultInfo": n => { this.resultInfo = n.getObjectValue<ResultInfo>(createResultInfoFromDiscriminatorValue); },
            "status": n => { this.status = n.getEnumValue<OperationStatus>(OperationStatus); },
        };
    };
    /**
     * Gets the resultInfo property value. The result information. Read-only.
     * @returns a resultInfo
     */
    public get resultInfo() {
        return this._resultInfo;
    };
    /**
     * Sets the resultInfo property value. The result information. Read-only.
     * @param value Value to set for the resultInfo property.
     */
    public set resultInfo(value: ResultInfo | undefined) {
        this._resultInfo = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("clientContext", this.clientContext);
        writer.writeObjectValue<ResultInfo>("resultInfo", this.resultInfo);
        writer.writeEnumValue<OperationStatus>("status", this.status);
    };
    /**
     * Gets the status property value. The status property
     * @returns a operationStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status property
     * @param value Value to set for the status property.
     */
    public set status(value: OperationStatus | undefined) {
        this._status = value;
    };
}
