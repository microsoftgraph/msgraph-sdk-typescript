import {DriveRecipient} from '../../../../../../../models/microsoft/graph/';
import {createDriveRecipientFromDiscriminatorValue} from '../../../../../../../models/microsoft/graph/createDriveRecipientFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the grant method.  */
export class GrantRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    private _recipients?: DriveRecipient[] | undefined;
    private _roles?: string[] | undefined;
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
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new grantRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {
            "recipients": (o, n) => { (o as unknown as GrantRequestBody).recipients = n.getCollectionOfObjectValues<DriveRecipient>(createDriveRecipientFromDiscriminatorValue); },
            "roles": (o, n) => { (o as unknown as GrantRequestBody).roles = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Gets the recipients property value. 
     * @returns a driveRecipient
     */
    public get recipients() {
        return this._recipients;
    };
    /**
     * Sets the recipients property value. 
     * @param value Value to set for the recipients property.
     */
    public set recipients(value: DriveRecipient[] | undefined) {
        this._recipients = value;
    };
    /**
     * Gets the roles property value. 
     * @returns a string
     */
    public get roles() {
        return this._roles;
    };
    /**
     * Sets the roles property value. 
     * @param value Value to set for the roles property.
     */
    public set roles(value: string[] | undefined) {
        this._roles = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<DriveRecipient>("recipients", this.recipients);
        writer.writeCollectionOfPrimitiveValues<string>("roles", this.roles);
        writer.writeAdditionalData(this.additionalData);
    };
}
