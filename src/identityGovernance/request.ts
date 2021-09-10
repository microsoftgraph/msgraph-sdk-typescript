import {Entity} from '../entity';
import {IdentitySet} from '../identitySet';
import {SerializationWriter, ParseNode, Parsable} from '@microsoft/kiota-abstractions';

export class Request extends Entity implements Parsable {
    private _approvalId?: string | undefined;
    private _completedDateTime?: Date | undefined;
    private _createdBy?: IdentitySet | undefined;
    private _createdDateTime?: Date | undefined;
    private _customData?: string | undefined;
    private _status?: string | undefined;
    /**
     * Instantiates a new request and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the approvalId property value. 
     * @returns a string
     */
    public get approvalId() {
        return this._approvalId;
    };
    /**
     * Gets the completedDateTime property value. 
     * @returns a Date
     */
    public get completedDateTime() {
        return this._completedDateTime;
    };
    /**
     * Gets the createdBy property value. 
     * @returns a identitySet
     */
    public get createdBy() {
        return this._createdBy;
    };
    /**
     * Gets the createdDateTime property value. 
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Gets the customData property value. 
     * @returns a string
     */
    public get customData() {
        return this._customData;
    };
    /**
     * Gets the status property value. 
     * @returns a string
     */
    public get status() {
        return this._status;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["approvalId", (o, n) => { (o as unknown as Request).approvalId = n.getStringValue(); }],
            ["completedDateTime", (o, n) => { (o as unknown as Request).completedDateTime = n.getDateValue(); }],
            ["createdBy", (o, n) => { (o as unknown as Request).createdBy = n.getObjectValue<IdentitySet>(IdentitySet); }],
            ["createdDateTime", (o, n) => { (o as unknown as Request).createdDateTime = n.getDateValue(); }],
            ["customData", (o, n) => { (o as unknown as Request).customData = n.getStringValue(); }],
            ["status", (o, n) => { (o as unknown as Request).status = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("approvalId", this.approvalId);
        writer.writeDateValue("completedDateTime", this.completedDateTime);
        writer.writeObjectValue<IdentitySet>("createdBy", this.createdBy);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("customData", this.customData);
        writer.writeStringValue("status", this.status);
    };
    /**
     * Sets the approvalId property value. 
     * @param value Value to set for the approvalId property.
     */
    public set approvalId(value: string | undefined) {
        this._approvalId = value;
    };
    /**
     * Sets the completedDateTime property value. 
     * @param value Value to set for the completedDateTime property.
     */
    public set completedDateTime(value: Date | undefined) {
        this._completedDateTime = value;
    };
    /**
     * Sets the createdBy property value. 
     * @param value Value to set for the createdBy property.
     */
    public set createdBy(value: IdentitySet | undefined) {
        this._createdBy = value;
    };
    /**
     * Sets the createdDateTime property value. 
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Sets the customData property value. 
     * @param value Value to set for the customData property.
     */
    public set customData(value: string | undefined) {
        this._customData = value;
    };
    /**
     * Sets the status property value. 
     * @param value Value to set for the status property.
     */
    public set status(value: string | undefined) {
        this._status = value;
    };
}
