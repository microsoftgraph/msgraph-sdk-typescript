import {Entity} from './entity';
import {TeamworkTagMember} from './teamworkTagMember';
import {TeamworkTagType} from './teamworkTagType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamworkTag extends Entity, Parsable {
    /**
     * The description of the tag as it will appear to the user in Microsoft Teams. A teamworkTag can't have more than 200 teamworkTagMembers.
     */
    description?: string | undefined;
    /**
     * The name of the tag as it will appear to the user in Microsoft Teams.
     */
    displayName?: string | undefined;
    /**
     * The number of users assigned to the tag.
     */
    memberCount?: number | undefined;
    /**
     * Users assigned to the tag.
     */
    members?: TeamworkTagMember[] | undefined;
    /**
     * The type of the tag. Default is standard.
     */
    tagType?: TeamworkTagType | undefined;
    /**
     * ID of the team in which the tag is defined.
     */
    teamId?: string | undefined;
}
