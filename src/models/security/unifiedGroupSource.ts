import {Group} from '../';
import {createGroupFromDiscriminatorValue} from '../createGroupFromDiscriminatorValue';
import {AdminMember1, DataSource} from './index';
import {SourceType} from './sourceType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnifiedGroupSource extends DataSource implements Parsable {
    /** The group property */
    private _group?: Group | undefined;
    /** Specifies which sources are included in this group. Possible values are: mailbox, site. */
    private _includedSources?: SourceType | AdminMember1 | undefined;
    /**
     * Instantiates a new UnifiedGroupSource and sets the default values.
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
            "group": n => { this.group = n.getObjectValue<Group>(createGroupFromDiscriminatorValue); },
            "includedSources": n => { this.includedSources = n.getObjectValue<SourceType>(createSourceTypeFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the group property value. The group property
     * @returns a group
     */
    public get group() {
        return this._group;
    };
    /**
     * Sets the group property value. The group property
     * @param value Value to set for the group property.
     */
    public set group(value: Group | undefined) {
        this._group = value;
    };
    /**
     * Gets the includedSources property value. Specifies which sources are included in this group. Possible values are: mailbox, site.
     * @returns a admin
     */
    public get includedSources() {
        return this._includedSources;
    };
    /**
     * Sets the includedSources property value. Specifies which sources are included in this group. Possible values are: mailbox, site.
     * @param value Value to set for the includedSources property.
     */
    public set includedSources(value: SourceType | AdminMember1 | undefined) {
        this._includedSources = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<Group>("group", this.group);
        writer.writeObjectValue<SourceType>("includedSources", this.includedSources);
    };
}
