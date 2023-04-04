import {createUnifiedRbacResourceActionFromDiscriminatorValue} from './createUnifiedRbacResourceActionFromDiscriminatorValue';
import {Entity, UnifiedRbacResourceAction} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnifiedRbacResourceNamespace extends Entity implements Parsable {
    /** The name property */
    private _name?: string | undefined;
    /** The resourceActions property */
    private _resourceActions?: UnifiedRbacResourceAction[] | undefined;
    /**
     * Instantiates a new unifiedRbacResourceNamespace and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "name": n => { this.name = n.getStringValue(); },
            "resourceActions": n => { this.resourceActions = n.getCollectionOfObjectValues<UnifiedRbacResourceAction>(createUnifiedRbacResourceActionFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the name property value. The name property
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The name property
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the resourceActions property value. The resourceActions property
     * @returns a unifiedRbacResourceAction
     */
    public get resourceActions() {
        return this._resourceActions;
    };
    /**
     * Sets the resourceActions property value. The resourceActions property
     * @param value Value to set for the resourceActions property.
     */
    public set resourceActions(value: UnifiedRbacResourceAction[] | undefined) {
        this._resourceActions = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("name", this.name);
        writer.writeCollectionOfObjectValues<UnifiedRbacResourceAction>("resourceActions", this.resourceActions);
    };
}
