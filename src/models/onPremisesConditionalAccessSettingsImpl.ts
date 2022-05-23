import {EntityImpl} from './index';
import {OnPremisesConditionalAccessSettings} from './onPremisesConditionalAccessSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Singleton entity which represents the Exchange OnPremises Conditional Access Settings for a tenant. */
export class OnPremisesConditionalAccessSettingsImpl extends EntityImpl implements OnPremisesConditionalAccessSettings, Parsable {
    /** Indicates if on premises conditional access is enabled for this organization */
    public enabled?: boolean | undefined;
    /** User groups that will be exempt by on premises conditional access. All users in these groups will be exempt from the conditional access policy. */
    public excludedGroups?: string[] | undefined;
    /** User groups that will be targeted by on premises conditional access. All users in these groups will be required to have mobile device managed and compliant for mail access. */
    public includedGroups?: string[] | undefined;
    /** Override the default access rule when allowing a device to ensure access is granted. */
    public overrideDefaultRule?: boolean | undefined;
    /**
     * Instantiates a new onPremisesConditionalAccessSettings and sets the default values.
     * @param onPremisesConditionalAccessSettingsParameterValue 
     */
    public constructor(onPremisesConditionalAccessSettingsParameterValue?: OnPremisesConditionalAccessSettings | undefined) {
        super();
        this.enabled = onPremisesConditionalAccessSettingsParameterValue?.enabled ;
        this.excludedGroups = onPremisesConditionalAccessSettingsParameterValue?.excludedGroups ;
        this.includedGroups = onPremisesConditionalAccessSettingsParameterValue?.includedGroups ;
        this.overrideDefaultRule = onPremisesConditionalAccessSettingsParameterValue?.overrideDefaultRule ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "enabled": n => { this.enabled = n.getBooleanValue(); },
            "excludedGroups": n => { this.excludedGroups = n.getCollectionOfPrimitiveValues<string>(); },
            "includedGroups": n => { this.includedGroups = n.getCollectionOfPrimitiveValues<string>(); },
            "overrideDefaultRule": n => { this.overrideDefaultRule = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.enabled){
        writer.writeBooleanValue("enabled", this.enabled);
        }
        if(this.excludedGroups){
        writer.writeCollectionOfPrimitiveValues<string>("excludedGroups", this.excludedGroups);
        }
        if(this.includedGroups){
        writer.writeCollectionOfPrimitiveValues<string>("includedGroups", this.includedGroups);
        }
        if(this.overrideDefaultRule){
        writer.writeBooleanValue("overrideDefaultRule", this.overrideDefaultRule);
        }
    };
}
