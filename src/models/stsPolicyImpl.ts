import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {DirectoryObject} from './directoryObject';
import {DirectoryObjectImpl, PolicyBaseImpl} from './index';
import {StsPolicy} from './stsPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class StsPolicyImpl extends PolicyBaseImpl implements StsPolicy {
    /** The appliesTo property */
    public appliesTo?: DirectoryObject[] | undefined;
    /** A string collection containing a JSON string that defines the rules and settings for a policy. The syntax for the definition differs for each derived policy type. Required. */
    public definition?: string[] | undefined;
    /** If set to true, activates this policy. There can be many policies for the same policy type, but only one can be activated as the organization default. Optional, default value is false. */
    public isOrganizationDefault?: boolean | undefined;
    /**
     * Instantiates a new StsPolicy and sets the default values.
     * @param stsPolicyParameterValue 
     */
    public constructor(stsPolicyParameterValue?: StsPolicy | undefined) {
        super(stsPolicyParameterValue);
        const appliesToArrValue: DirectoryObjectImpl[] = []; stsPolicyParameterValue?.appliesTo?.forEach(element => {appliesToArrValue.push(element instanceof DirectoryObjectImpl? element : new DirectoryObjectImpl(element));});
        this.appliesTo = appliesToArrValue;
        this.definition = stsPolicyParameterValue?.definition;
        this.isOrganizationDefault = stsPolicyParameterValue?.isOrganizationDefault;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "appliesTo": n => { this.appliesTo = n.getCollectionOfObjectValues<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "definition": n => { this.definition = n.getCollectionOfPrimitiveValues<string>(); },
            "isOrganizationDefault": n => { this.isOrganizationDefault = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.appliesTo && this.appliesTo.length != 0){        const appliesToArrValue: DirectoryObjectImpl[] = []; this.appliesTo?.forEach(element => {appliesToArrValue.push(element instanceof DirectoryObjectImpl? element : new DirectoryObjectImpl(element));});
            writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("appliesTo", appliesToArrValue);
        }
        if(this.definition){
            writer.writeCollectionOfPrimitiveValues<string>("definition", this.definition);
        }
        if(this.isOrganizationDefault){
            writer.writeBooleanValue("isOrganizationDefault", this.isOrganizationDefault);
        }
    };
}
