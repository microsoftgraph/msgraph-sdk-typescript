import {DriveRecipientImpl} from '../../../../../../../../../models/';
import {createDriveRecipientFromDiscriminatorValue} from '../../../../../../../../../models/createDriveRecipientFromDiscriminatorValue';
import {DriveRecipient} from '../../../../../../../../../models/driveRecipient';
import {GrantPostRequestBody} from './grantPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the grant method. */
export class GrantPostRequestBodyImpl implements GrantPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The recipients property */
    private _recipients?: DriveRecipient[] | undefined;
    /** The roles property */
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
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new grantPostRequestBody and sets the default values.
     * @param grantPostRequestBodyParameterValue 
     */
    public constructor(grantPostRequestBodyParameterValue?: GrantPostRequestBody | undefined) {
        this._additionalData = grantPostRequestBodyParameterValue?.additionalData ? grantPostRequestBodyParameterValue?.additionalData! : {};
        this._recipients = grantPostRequestBodyParameterValue?.recipients;
        this._roles = grantPostRequestBodyParameterValue?.roles;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "recipients": n => { this.recipients = n.getCollectionOfObjectValues<DriveRecipientImpl>(createDriveRecipientFromDiscriminatorValue); },
            "roles": n => { this.roles = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Gets the recipients property value. The recipients property
     * @returns a DriveRecipientInterface
     */
    public get recipients() {
        return this._recipients;
    };
    /**
     * Sets the recipients property value. The recipients property
     * @param value Value to set for the recipients property.
     */
    public set recipients(value: DriveRecipient[] | undefined) {
        if(value) {
            const recipientsArrValue: DriveRecipientImpl[] = [];
            this.recipients?.forEach(element => {
                recipientsArrValue.push((element instanceof DriveRecipientImpl? element as DriveRecipientImpl:new DriveRecipientImpl(element)));
            });
            this._recipients = recipientsArrValue;
        }
    };
    /**
     * Gets the roles property value. The roles property
     * @returns a string
     */
    public get roles() {
        return this._roles;
    };
    /**
     * Sets the roles property value. The roles property
     * @param value Value to set for the roles property.
     */
    public set roles(value: string[] | undefined) {
        if(value) {
            this._roles = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.recipients && this.recipients.length != 0){        const recipientsArrValue: DriveRecipientImpl[] = [];
        this.recipients?.forEach(element => {
            recipientsArrValue.push((element instanceof DriveRecipientImpl? element as DriveRecipientImpl:new DriveRecipientImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DriveRecipientImpl>("recipients", recipientsArrValue);
        }
        if(this.roles){
            writer.writeCollectionOfPrimitiveValues<string>("roles", this.roles);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
