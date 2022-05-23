import {EntityImpl} from './index';
import {VppToken} from './vppToken';
import {VppTokenAccountType} from './vppTokenAccountType';
import {VppTokenState} from './vppTokenState';
import {VppTokenSyncStatus} from './vppTokenSyncStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** You purchase multiple licenses for iOS apps through the Apple Volume Purchase Program for Business or Education. This involves setting up an Apple VPP account from the Apple website and uploading the Apple VPP Business or Education token to Intune. You can then synchronize your volume purchase information with Intune and track your volume-purchased app use. You can upload multiple Apple VPP Business or Education tokens. */
export class VppTokenImpl extends EntityImpl implements Parsable, VppToken {
    /** The apple Id associated with the given Apple Volume Purchase Program Token. */
    public appleId?: string | undefined;
    /** Whether or not apps for the VPP token will be automatically updated. */
    public automaticallyUpdateApps?: boolean | undefined;
    /** Whether or not apps for the VPP token will be automatically updated. */
    public countryOrRegion?: string | undefined;
    /** The expiration date time of the Apple Volume Purchase Program Token. */
    public expirationDateTime?: Date | undefined;
    /** Last modification date time associated with the Apple Volume Purchase Program Token. */
    public lastModifiedDateTime?: Date | undefined;
    /** The last time when an application sync was done with the Apple volume purchase program service using the the Apple Volume Purchase Program Token. */
    public lastSyncDateTime?: Date | undefined;
    /** Current sync status of the last application sync which was triggered using the Apple Volume Purchase Program Token. Possible values are: none, inProgress, completed, failed. Possible values are: none, inProgress, completed, failed. */
    public lastSyncStatus?: VppTokenSyncStatus | undefined;
    /** The organization associated with the Apple Volume Purchase Program Token */
    public organizationName?: string | undefined;
    /** Current state of the Apple Volume Purchase Program Token. Possible values are: unknown, valid, expired, invalid, assignedToExternalMDM. Possible values are: unknown, valid, expired, invalid, assignedToExternalMDM, duplicateLocationId. */
    public state?: VppTokenState | undefined;
    /** The Apple Volume Purchase Program Token string downloaded from the Apple Volume Purchase Program. */
    public token?: string | undefined;
    /** The type of volume purchase program which the given Apple Volume Purchase Program Token is associated with. Possible values are: business, education. Possible values are: business, education. */
    public vppTokenAccountType?: VppTokenAccountType | undefined;
    /**
     * Instantiates a new vppToken and sets the default values.
     * @param vppTokenParameterValue 
     */
    public constructor(vppTokenParameterValue?: VppToken | undefined) {
        super();
        this.appleId = vppTokenParameterValue?.appleId ;
        this.automaticallyUpdateApps = vppTokenParameterValue?.automaticallyUpdateApps ;
        this.countryOrRegion = vppTokenParameterValue?.countryOrRegion ;
        this.expirationDateTime = vppTokenParameterValue?.expirationDateTime ;
        this.lastModifiedDateTime = vppTokenParameterValue?.lastModifiedDateTime ;
        this.lastSyncDateTime = vppTokenParameterValue?.lastSyncDateTime ;
        this.lastSyncStatus = vppTokenParameterValue?.lastSyncStatus ;
        this.organizationName = vppTokenParameterValue?.organizationName ;
        this.state = vppTokenParameterValue?.state ;
        this.token = vppTokenParameterValue?.token ;
        this.vppTokenAccountType = vppTokenParameterValue?.vppTokenAccountType ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "appleId": n => { this.appleId = n.getStringValue(); },
            "automaticallyUpdateApps": n => { this.automaticallyUpdateApps = n.getBooleanValue(); },
            "countryOrRegion": n => { this.countryOrRegion = n.getStringValue(); },
            "expirationDateTime": n => { this.expirationDateTime = n.getDateValue(); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "lastSyncDateTime": n => { this.lastSyncDateTime = n.getDateValue(); },
            "lastSyncStatus": n => { this.lastSyncStatus = n.getEnumValue<VppTokenSyncStatus>(VppTokenSyncStatus); },
            "organizationName": n => { this.organizationName = n.getStringValue(); },
            "state": n => { this.state = n.getEnumValue<VppTokenState>(VppTokenState); },
            "token": n => { this.token = n.getStringValue(); },
            "vppTokenAccountType": n => { this.vppTokenAccountType = n.getEnumValue<VppTokenAccountType>(VppTokenAccountType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.appleId){
        writer.writeStringValue("appleId", this.appleId);
        }
        if(this.automaticallyUpdateApps){
        writer.writeBooleanValue("automaticallyUpdateApps", this.automaticallyUpdateApps);
        }
        if(this.countryOrRegion){
        writer.writeStringValue("countryOrRegion", this.countryOrRegion);
        }
        if(this.expirationDateTime){
        writer.writeDateValue("expirationDateTime", this.expirationDateTime);
        }
        if(this.lastModifiedDateTime){
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.lastSyncDateTime){
        writer.writeDateValue("lastSyncDateTime", this.lastSyncDateTime);
        }
        if(this.lastSyncStatus){
        writer.writeEnumValue<VppTokenSyncStatus>("lastSyncStatus", this.lastSyncStatus);
        }
        if(this.organizationName){
        writer.writeStringValue("organizationName", this.organizationName);
        }
        if(this.state){
        writer.writeEnumValue<VppTokenState>("state", this.state);
        }
        if(this.token){
        writer.writeStringValue("token", this.token);
        }
        if(this.vppTokenAccountType){
        writer.writeEnumValue<VppTokenAccountType>("vppTokenAccountType", this.vppTokenAccountType);
        }
    };
}
