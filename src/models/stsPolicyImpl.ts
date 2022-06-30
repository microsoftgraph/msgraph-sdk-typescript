import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {DirectoryObject} from './directoryObject';
import {DirectoryObjectImpl, PolicyBaseImpl} from './index';
import {StsPolicy} from './stsPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class StsPolicyImpl extends PolicyBaseImpl implements StsPolicy {
    /** The appliesTo property */
    private _appliesTo?: DirectoryObject[] | undefined;
    /** A string collection containing a JSON string that defines the rules and settings for a policy. The syntax for the definition differs for each derived policy type. Required. */
    private _definition?: string[] | undefined;
    /** If set to true, activates this policy. There can be many policies for the same policy type, but only one can be activated as the organization default. Optional, default value is false. */
    private _isOrganizationDefault?: boolean | undefined;
    /**
     * Gets the appliesTo property value. The appliesTo property
     * @returns a DirectoryObjectInterface
     */
    public get appliesTo() {
        return this._appliesTo;
    };
    /**
     * Sets the appliesTo property value. The appliesTo property
     * @param value Value to set for the appliesTo property.
     */
    public set appliesTo(value: DirectoryObject[] | undefined) {
        if(value) {
            const appliesToArrValue: DirectoryObjectImpl[] = [];
            this.appliesTo?.forEach(element => {
                appliesToArrValue.push((element instanceof DirectoryObjectImpl? element:new DirectoryObjectImpl(element)));
            });
            this._appliesTo = appliesToArrValue;
        }
    };
    /**
     * Instantiates a new StsPolicy and sets the default values.
     * @param stsPolicyParameterValue 
     */
    public constructor(stsPolicyParameterValue?: StsPolicy | undefined) {
        super(stsPolicyParameterValue);
        this._appliesTo = stsPolicyParameterValue?.appliesTo;
        this._definition = stsPolicyParameterValue?.definition;
        this._isOrganizationDefault = stsPolicyParameterValue?.isOrganizationDefault;
    };
    /**
     * Gets the definition property value. A string collection containing a JSON string that defines the rules and settings for a policy. The syntax for the definition differs for each derived policy type. Required.
     * @returns a string
     */
    public get definition() {
        return this._definition;
    };
    /**
     * Sets the definition property value. A string collection containing a JSON string that defines the rules and settings for a policy. The syntax for the definition differs for each derived policy type. Required.
     * @param value Value to set for the definition property.
     */
    public set definition(value: string[] | undefined) {
        if(value) {
            this._definition = value;
        }
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
     * Gets the isOrganizationDefault property value. If set to true, activates this policy. There can be many policies for the same policy type, but only one can be activated as the organization default. Optional, default value is false.
     * @returns a boolean
     */
    public get isOrganizationDefault() {
        return this._isOrganizationDefault;
    };
    /**
     * Sets the isOrganizationDefault property value. If set to true, activates this policy. There can be many policies for the same policy type, but only one can be activated as the organization default. Optional, default value is false.
     * @param value Value to set for the isOrganizationDefault property.
     */
    public set isOrganizationDefault(value: boolean | undefined) {
        if(value) {
            this._isOrganizationDefault = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.appliesTo && this.appliesTo.length != 0){        const appliesToArrValue: DirectoryObjectImpl[] = [];
        this.appliesTo?.forEach(element => {
            appliesToArrValue.push((element instanceof DirectoryObjectImpl? element:new DirectoryObjectImpl(element)));
        });
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
