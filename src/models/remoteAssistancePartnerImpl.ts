import {EntityImpl} from './index';
import {RemoteAssistanceOnboardingStatus} from './remoteAssistanceOnboardingStatus';
import {RemoteAssistancePartner} from './remoteAssistancePartner';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** RemoteAssistPartner resources represent the metadata and status of a given Remote Assistance partner service. */
export class RemoteAssistancePartnerImpl extends EntityImpl implements Parsable, RemoteAssistancePartner {
    /** Display name of the partner. */
    public displayName?: string | undefined;
    /** Timestamp of the last request sent to Intune by the TEM partner. */
    public lastConnectionDateTime?: Date | undefined;
    /** A friendly description of the current TeamViewer connector status. Possible values are: notOnboarded, onboarding, onboarded. */
    public onboardingStatus?: RemoteAssistanceOnboardingStatus | undefined;
    /** URL of the partner's onboarding portal, where an administrator can configure their Remote Assistance service. */
    public onboardingUrl?: string | undefined;
    /**
     * Instantiates a new remoteAssistancePartner and sets the default values.
     * @param remoteAssistancePartnerParameterValue 
     */
    public constructor(remoteAssistancePartnerParameterValue?: RemoteAssistancePartner | undefined) {
        super();
        this.displayName = remoteAssistancePartnerParameterValue?.displayName ;
        this.lastConnectionDateTime = remoteAssistancePartnerParameterValue?.lastConnectionDateTime ;
        this.onboardingStatus = remoteAssistancePartnerParameterValue?.onboardingStatus ;
        this.onboardingUrl = remoteAssistancePartnerParameterValue?.onboardingUrl ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "displayName": n => { this.displayName = n.getStringValue(); },
            "lastConnectionDateTime": n => { this.lastConnectionDateTime = n.getDateValue(); },
            "onboardingStatus": n => { this.onboardingStatus = n.getEnumValue<RemoteAssistanceOnboardingStatus>(RemoteAssistanceOnboardingStatus); },
            "onboardingUrl": n => { this.onboardingUrl = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.lastConnectionDateTime){
        writer.writeDateValue("lastConnectionDateTime", this.lastConnectionDateTime);
        }
        if(this.onboardingStatus){
        writer.writeEnumValue<RemoteAssistanceOnboardingStatus>("onboardingStatus", this.onboardingStatus);
        }
        if(this.onboardingUrl){
        writer.writeStringValue("onboardingUrl", this.onboardingUrl);
        }
    };
}
