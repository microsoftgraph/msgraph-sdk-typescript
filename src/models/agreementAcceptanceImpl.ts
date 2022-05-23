import {AgreementAcceptance} from './agreementAcceptance';
import {AgreementAcceptanceState} from './agreementAcceptanceState';
import {EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of agreement entities. */
export class AgreementAcceptanceImpl extends EntityImpl implements AgreementAcceptance, Parsable {
    /** ID of the agreement file accepted by the user. */
    public agreementFileId?: string | undefined;
    /** ID of the agreement. */
    public agreementId?: string | undefined;
    /** The display name of the device used for accepting the agreement. */
    public deviceDisplayName?: string | undefined;
    /** The unique identifier of the device used for accepting the agreement. */
    public deviceId?: string | undefined;
    /** The operating system used for accepting the agreement. */
    public deviceOSType?: string | undefined;
    /** The operating system version of the device used for accepting the agreement. */
    public deviceOSVersion?: string | undefined;
    /** The expiration date time of the acceptance. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    public expirationDateTime?: Date | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    public recordedDateTime?: Date | undefined;
    /** Possible values are: accepted, declined. Supports $filter (eq). */
    public state?: AgreementAcceptanceState | undefined;
    /** Display name of the user when the acceptance was recorded. */
    public userDisplayName?: string | undefined;
    /** Email of the user when the acceptance was recorded. */
    public userEmail?: string | undefined;
    /** ID of the user who accepted the agreement. */
    public userId?: string | undefined;
    /** UPN of the user when the acceptance was recorded. */
    public userPrincipalName?: string | undefined;
    /**
     * Instantiates a new agreementAcceptance and sets the default values.
     * @param agreementAcceptanceParameterValue 
     */
    public constructor(agreementAcceptanceParameterValue?: AgreementAcceptance | undefined) {
        super();
        this.agreementFileId = agreementAcceptanceParameterValue?.agreementFileId ;
        this.agreementId = agreementAcceptanceParameterValue?.agreementId ;
        this.deviceDisplayName = agreementAcceptanceParameterValue?.deviceDisplayName ;
        this.deviceId = agreementAcceptanceParameterValue?.deviceId ;
        this.deviceOSType = agreementAcceptanceParameterValue?.deviceOSType ;
        this.deviceOSVersion = agreementAcceptanceParameterValue?.deviceOSVersion ;
        this.expirationDateTime = agreementAcceptanceParameterValue?.expirationDateTime ;
        this.recordedDateTime = agreementAcceptanceParameterValue?.recordedDateTime ;
        this.state = agreementAcceptanceParameterValue?.state ;
        this.userDisplayName = agreementAcceptanceParameterValue?.userDisplayName ;
        this.userEmail = agreementAcceptanceParameterValue?.userEmail ;
        this.userId = agreementAcceptanceParameterValue?.userId ;
        this.userPrincipalName = agreementAcceptanceParameterValue?.userPrincipalName ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "agreementFileId": n => { this.agreementFileId = n.getStringValue(); },
            "agreementId": n => { this.agreementId = n.getStringValue(); },
            "deviceDisplayName": n => { this.deviceDisplayName = n.getStringValue(); },
            "deviceId": n => { this.deviceId = n.getStringValue(); },
            "deviceOSType": n => { this.deviceOSType = n.getStringValue(); },
            "deviceOSVersion": n => { this.deviceOSVersion = n.getStringValue(); },
            "expirationDateTime": n => { this.expirationDateTime = n.getDateValue(); },
            "recordedDateTime": n => { this.recordedDateTime = n.getDateValue(); },
            "state": n => { this.state = n.getEnumValue<AgreementAcceptanceState>(AgreementAcceptanceState); },
            "userDisplayName": n => { this.userDisplayName = n.getStringValue(); },
            "userEmail": n => { this.userEmail = n.getStringValue(); },
            "userId": n => { this.userId = n.getStringValue(); },
            "userPrincipalName": n => { this.userPrincipalName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.agreementFileId){
        writer.writeStringValue("agreementFileId", this.agreementFileId);
        }
        if(this.agreementId){
        writer.writeStringValue("agreementId", this.agreementId);
        }
        if(this.deviceDisplayName){
        writer.writeStringValue("deviceDisplayName", this.deviceDisplayName);
        }
        if(this.deviceId){
        writer.writeStringValue("deviceId", this.deviceId);
        }
        if(this.deviceOSType){
        writer.writeStringValue("deviceOSType", this.deviceOSType);
        }
        if(this.deviceOSVersion){
        writer.writeStringValue("deviceOSVersion", this.deviceOSVersion);
        }
        if(this.expirationDateTime){
        writer.writeDateValue("expirationDateTime", this.expirationDateTime);
        }
        if(this.recordedDateTime){
        writer.writeDateValue("recordedDateTime", this.recordedDateTime);
        }
        if(this.state){
        writer.writeEnumValue<AgreementAcceptanceState>("state", this.state);
        }
        if(this.userDisplayName){
        writer.writeStringValue("userDisplayName", this.userDisplayName);
        }
        if(this.userEmail){
        writer.writeStringValue("userEmail", this.userEmail);
        }
        if(this.userId){
        writer.writeStringValue("userId", this.userId);
        }
        if(this.userPrincipalName){
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        }
    };
}
